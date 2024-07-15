import { ShareRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ShareButton = ({ speed }) => {
  const [sharedLink, setSharedLink] = useState("");

  const handleShare = () => {
    const uniqueId = uuidv4();
    const link = `${window.location.origin}/tracking?speed=${speed}&id=${uniqueId}`;
    setSharedLink(link);

    if (navigator.share) {
      navigator
        .share({
          title: "Check out this clock!",
          text: "Here is a link to view the clock with the same configuration:",
          url: link,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(
        "Web Share API is not supported in your browser. Copy the link manually: " +
          link,
      );
    }
  };

  const handelCopyLink = () => {
    navigator.clipboard.writeText(sharedLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex text-black  items-center mt-4 gap-4 justify-center transition-all duration-500 ease-in-out">
      <button
        onClick={handleShare}
        className="bg-white text-black rounded-full p-4 flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <ShareRounded fontSize="large" />
      </button>

      {sharedLink && (
        <div className="mt-4" onClick={handelCopyLink}>
          <p className="text-sm text-gray-600">Share this link:</p>
          <p className="text-black text-sm font-bold underline">{sharedLink}</p>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
