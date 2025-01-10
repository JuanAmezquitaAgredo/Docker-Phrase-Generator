import { NextResponse } from 'next/server';

export async function GET() {

    const Subjects = ["The dog", "The turtle", "My friend", "Sebastian"];
    const Predicates = ["runs fast", "is very wise", "loves coding", "sings poorly"];

    const subject = Subjects[Math.floor(Math.random() * Subjects.length)];
    const predicate = Predicates[Math.floor(Math.random() * Predicates.length)];
 
  return NextResponse.json({
    subject,
    predicate 
  });
}
