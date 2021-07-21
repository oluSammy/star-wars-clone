export const limitSentence = (sentence: string) => {
  const words = sentence.split(" ");

  if (words.length > 4) return `${words.slice(0, 5).join(" ")}...`;
  return sentence;
};
