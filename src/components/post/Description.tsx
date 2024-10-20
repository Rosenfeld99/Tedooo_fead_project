import { FC, useState } from "react";

interface PostTextProps {
  text: string;
}

const Description: FC<PostTextProps> = ({ text }) => {
  const [seeMoreTextOpen, setSeeMoreTextOpen] = useState<Boolean>(false);

  // Function to find and replace URLs in the text with anchor tags
  const createLinkFromText = (text: string): JSX.Element[] => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) =>
      urlRegex.test(part) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2c68be] underline hover:opacity-70"
        >
          {part}
        </a>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  // Display "See more" only if the text is longer than 330 characters
  const shortText = text.substring(0, 330);

  return (
    <div className="text-sm text-[#000000] font-[400]">
      {seeMoreTextOpen
        ? createLinkFromText(text)
        : createLinkFromText(shortText)}
      {!seeMoreTextOpen && text.length > 330 && (
        <span
          onClick={() => setSeeMoreTextOpen(true)}
          className="text-neutral font-semibold hover:underline cursor-pointer"
        >
          ...See more
        </span>
      )}
    </div>
  );
};

export default Description;
