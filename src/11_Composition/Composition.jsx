import React from "react";
import Button from "./Button";

const Composition = () => {
  return (
    <div>
      <h1 className="text-center">Button</h1>

      <Button
        variant="primary"
        // prop có thể là 1 jsx
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        }
      >
        {/* children */}
        Primary
      </Button>
      <Button variant="secondary" className="w-100" disabled={true}>
        Secondary
      </Button>
    </div>
  );
};

export default Composition;
