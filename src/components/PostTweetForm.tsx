import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
// firestore안에 document를 추가할 수 있음!
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { ref } from "firebase/storage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  background: var(--light-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--dark-color);
  font-size: 1.8rem;
  line-height: 1.3;
  padding: 20px;
  resize: none;
  transition: border 0.3s;
  &::placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    outline: none;
    border: 1px solid var(--sub-color);
    &::placeholder {
      opacity: 0;
    }
  }
`;

const AttachFileButton = styled.label`
  width: 100%;
  color: var(--light-color);
  background: var(--sub-color);
  border-radius: 4px;
  padding: 15px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.input`
  width: 100%;
  padding: 15px;
  background: var(--accent-color);
  color: var(--light-color);
  border: none;
  border-radius: 4px;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const PostTweetForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tweet, setTweet] = useState("");
  const [file, setFile] = useState<File | null>(null);
  // File은 파일에 대한 내장문서상의 타입
  // File 타입 아님 null 사용이 되지 않을 수 도 있다는 말

  const TextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
  };

  const FileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user || isLoading || tweet === "" || tweet.length > 180) return;
    try {
      setIsLoading(true);

      await addDoc(collection(db, "tweets"), {
        tweet,
        createdAt: Date.now(),
        username: user.displayName || "Annoymous",
        userId: user.uid,
      });
      // addDoc은 어떤컬렉션? 어떤data? 를 두개의 인자값으로 받음
      // collection은 최소 두개의 인자값
      // firestore(db), path 는 경로 내가 tweets라고 firebase가서 만들어놈  + ...pathSegments: string[]
      if (file) {
        const locationRef = ref(storage, `tweets/${user.uid}`);
        // ref는 storage가 첫번째, 가 두번째 인자값으로 들어감 // 참조해야하는 위치 정의 역할
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setTweet("");
    }
  };
  // 서버가 아닌 우리가 원하는 대상으로 data를 보내는 것을 할 것임
  // 일단 서버로 안가도록 e.preventDefault();

  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        rows={5}
        maxLength={180}
        value={tweet}
        onChange={TextAreaChange}
        placeholder="What is happening today?"
        required
      />

      <AttachFileButton htmlFor="file">
        {file ? "Photo already Added" : "Add Photo"}
      </AttachFileButton>

      <AttachFileInput
        onChange={FileChange}
        type="file"
        id="file"
        accept="image/*"
      />

      <SubmitButton
        type="submit"
        value={isLoading ? "Posting..." : "Post Tweet"}
      />
    </Form>
  );
};
// 우리가 사진을 여러장을 한번에 보낼수 없게 설정할것
// accept="image/*"는 * 즉 전체 파일형식을 다 가져올수 있는것

export default PostTweetForm;
