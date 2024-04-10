'use server';
import { Suspense } from 'react';
import { convertHtmlEntities } from './_lib/convert-html-entities';
import { Question } from './_lib/definitions';

const getQuestions = async () => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = res.json();
  return data;
};

const Questions = async () => {
  const data = await getQuestions();
  const questions = data.results;
  console.log(questions);

  return (
    <ul>
      {questions.map((question: Question) => (
        <li key={question.question}>
          {convertHtmlEntities(question.question)}
        </li>
      ))}
    </ul>
  );
};

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Questions />
      </Suspense>
    </main>
  );
}
