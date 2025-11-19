import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((r) => r.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegions = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegions = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const samedistrict = data.receiverDistrict === data.senderDistrict;
    const parcelWeight = parseInt(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = samedistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = samedistrict ? 110 : 150;
      } else {
        const minCharge = samedistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = samedistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    console.log(cost);
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged! ${cost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
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
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a Districts"
                  className="select"
                >
                  <option disabled={true}>Pick a Districts</option>
                  {districtsByRegions(senderRegions)?.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
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
              {/* receiver region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* receiver district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtsByRegions(receiverRegion)?.map((d, index) => (
                    <option key={index} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
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
        <div className="text-center mt-5">
          <input
            type="submit"
            className="btn btn-primary my-3 w-1/2 text-secondary"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
