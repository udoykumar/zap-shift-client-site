import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-3xl text-secondary font-bold">Send A Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* document */}

        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info: name , weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12">
          <fieldset className="fieldset ">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full rounded-full focus:outline-0 hover:ring-2 hover:ring-primary input-primary "
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (Kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full rounded-full focus:outline-0  hover:ring-2 hover:ring-primary input-primary"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender details  */}

          <div>
            <fieldset className="fieldset">
              <h3 className="text-2xl font-semibold">Sender Details</h3>
              {/* sender name  */}
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full rounded-full focus:outline-0  hover:ring-2 hover:ring-primary input-primary"
                placeholder="Sender Name"
              />
              {/* sender email  */}
              <label className="label">Sender Email</label>
              <input
                type="text"
                {...register("senderEmail")}
                className="input w-full rounded-full focus:outline-0  hover:ring-2 hover:ring-primary input-primary"
                placeholder="Sender Email"
              />
              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>
                <select defaultValue="Pick a Region" className="select">
                  <option disabled={true}>Pick a Region</option>
                  <option>Chrome</option>
                  <option>FireFox</option>
                  <option>Safari</option>
                </select>
                <span className="label">Optional</span>
              </fieldset>
              {/* your distric  */}
              <select defaultValue="Pick a color" className="select">
                <option disabled={true}>Pick a color</option>
                <option>Crimson</option>
              </select>
              {/* sender address  */}
              <label className="label mt-4">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full rounded-full focus:outline-0  hover:ring-2 hover:ring-primary input-primary"
                placeholder="Sender Address"
              />
              {/* sender phone no  */}
              <label className="label mt-4">Sender Phone No</label>
              <input
                type="number"
                {...register("senderphoneNo")}
                className="input w-full rounded-full focus:outline-0 input-primary  hover:ring-2 hover:ring-primary"
                placeholder="Sender Phone no"
              />

              {/* sender instruction  */}
              <label className="label">Sender Instruction</label>
              <textarea
                {...register("senderInstructor")}
                placeholder="Sender Instructor"
                className="textarea textarea-primary"
              ></textarea>
            </fieldset>
          </div>
          {/* receiver info */}
          <div>
            <fieldset className="fieldset">
              <h3 className="text-2xl font-semibold">Receiver Details</h3>
              {/* receiver name  */}
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full rounded-full focus:outline-0  hover:ring-2 hover:ring-primary input-primary"
                placeholder="Receiver Name"
              />
              {/* receiver email  */}
              <label className="label">Receiver Email</label>
              <input
                type="text"
                {...register("receiverEmail")}
                className="input w-full rounded-full focus:outline-0  hover:ring-2 hover:ring-primary input-primary"
                placeholder="Receiver Email"
              />
              {/* receiver address  */}
              <label className="label mt-4">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full rounded-full focus:outline-0  hover:ring-2 hover:ring-primary input-primary"
                placeholder="Receiver Address"
              />
              {/* receiver phone no  */}
              <label className="label mt-4">Receiver Phone No</label>
              <input
                type="number"
                {...register("receiverphoneNo")}
                className="input w-full rounded-full focus:outline-0 input-primary  hover:ring-2 hover:ring-primary"
                placeholder="Receiver Phone no"
              />
              {/* your distric  */}
              <select defaultValue="Pick a color" className="select">
                <option disabled={true}>Pick a color</option>
                <option>receiver</option>
              </select>
              {/* receiver instruction  */}
              <label className="label">Receiver Instruction</label>
              <textarea
                {...register("receiverInstructor")}
                placeholder="Receiver Instructor"
                className="textarea textarea-primary"
              ></textarea>
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3 text-secondary"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SendParcel;
