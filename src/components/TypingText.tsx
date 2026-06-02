import { useState, useEffect } from "react";

export default function TypingText() {
  const words = [
    "Full-Stack Developer",
    "Cybersecurity Analyst",
    "Digital Marketer",
    "Ubaidi IT Founder",
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    let timer: number;
    const word = words[currentWordIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing letters
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(110);

        if (currentText === word) {
          // Pause at write peak
          timer = window.setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting letters
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(400); // pause before starting next word
          return;
        }
      }

      timer = window.setTimeout(handleType, typingSpeed);
    };

    timer = window.setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <span id="animated-typing-term" className="font-mono text-cyan-400 font-bold relative inline-block">
      {currentText}
      <span className="animate-pulse bg-cyan-400 w-1.5 h-4 inline-block ml-1 h-[1em]" style={{ verticalAlign: "middle" }} />
    </span>
  );
}
