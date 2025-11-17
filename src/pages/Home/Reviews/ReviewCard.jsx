import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_email, user_photoURL } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-base-300 p-6">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-primary mb-3" />

      {/* Card Body Text */}
      <p className="">{testimonial}</p>

      {/* Divider */}
      <div className="divider my-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary">
          <img src={user_photoURL} alt="" className="rounded-full" />
        </div>

        <div>
          <h3 className="font-semibold text-base-content">{userName}</h3>
          <p className="text-sm text-base-content/60">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
