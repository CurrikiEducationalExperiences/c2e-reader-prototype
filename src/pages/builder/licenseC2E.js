import React from "react";
import { Formik } from "formik";
import Modal from "react-bootstrap/Modal";

import RoyaltyBasedContentCard from "./royaltyBasedContentCard";

const LicenseC2E = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="w-full bg-white h-full calc-function ">
      <div className="w-full bg-primarycolor2 px-8 py-[12px] ">
        <h4 className="font-medium text-2xl text-white m-0">License C2E</h4>
      </div>
      <div className="w-full  h-full  px-8 py-7">
        <h4 className="font-medium text-base text-primarycolor2 mb-1">License C2E</h4>
        <h2 className="font-medium text-2xl text-black mb-2">Activity Sampler</h2>
        <button className="w-[172px] h-auto border-none outline-none py-2 px-3 text-white bg-[#0CA789] rounded font-normal text-sm">C2e-12345678</button>

        <div className="w-full mt-[30px]">
          <Formik
            initialValues={{
              copyright_year: "",
              copyright_notice: "",
              c2e_price: "",
              purchased: false,
              subscription: false,
              open: false,
              royalty_agreement_number: "",
              content: "",
              agreement_date: "",
              status: "",
              publisher_rights: "",
              license_expiration_date: "",
              publisher_name: "",
              publisher_url: "",
              publisher_terms: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.copyright_notice) {
                errors.copyright_notice = "Required";
              }
              if (!values.copyright_year) {
                errors.copyright_year = "Required";
              }
              if (!values.c2e_price) {
                errors.c2e_price = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col ">
                <div className="flex flex-wrap items-center gap-[27px]">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="purchased" onChange={handleChange} onBlur={handleBlur} value={values?.purchased} checked={!!values?.purchased} />
                    <label className={`font-normal text-sm m-0 ${values?.purchased === true ? "text-[#2E68BF]" : "text-[#515151]"}`}>Purchased</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="subscription" onChange={handleChange} onBlur={handleBlur} value={values?.subscription} checked={!!values?.subscription} />
                    <label className={`font-normal text-sm m-0 ${values?.subscription === true ? "text-[#2E68BF]" : "text-[#515151]"}`}>Subscription</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="open" onChange={handleChange} onBlur={handleBlur} value={values?.open} checked={!!values?.open} />
                    <label className={`font-normal text-sm m-0 ${values?.open === true ? "text-[#2E68BF]" : "text-[#515151]"}`}>Open</label>
                  </div>
                </div>

                <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mb-4 mt-7">Set Copyright Attributes</h1>

                <div className="flex flex-col gap-2">
                  <label className="custom_label mb-2">Copyright Notice</label>
                  <textarea
                    className="custom_input border_input mb-4 placeholder-primarycolor2"
                    name="copyright_notice"
                    placeholder="Copyright Notice"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.copyright_notice}
                    cols="10"
                    rows="5"
                  />
                  <label className="custom_label mb-2">Copyright Year</label>
                  <input
                    className="custom_input border_input placeholder-primarycolor2"
                    type="number"
                    placeholder="Copyright Year"
                    name="copyright_year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.copyright_year}
                  />
                </div>

                <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mb-4 mt-8">Royalty-Based Content</h1>

                <div className="flex items-center gap-[26px] flex-wrap">
                  <RoyaltyBasedContentCard setModalShow={setModalShow} />
                </div>
                <RoyaltyInformationModal modalShow={modalShow} setModalShow={setModalShow} handleChange={handleChange} handleBlur={handleBlur} values={values} />
                <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mb-4 mt-8">C2E Price</h1>
                <div className="w-full xsm:w-[231px]">
                  <input
                    className="custom_input border_input placeholder-primarycolor2"
                    type="number"
                    placeholder="C2E Price"
                    name="c2e_price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.c2e_price}
                  />
                </div>
                <div className="mt-7 ml-auto">
                  <button type="submit" className="primary-btn bg-primarycolor text-white save-btn" disabled={isSubmitting}>
                    SAVE
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LicenseC2E;

const RoyaltyInformationModal = ({ handleChange, handleBlur, values, modalShow, setModalShow }) => {
  return (
    <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="custom-modal">
      <Modal.Header closeButton className="">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="font-semibold text-2xl text-primarycolor2 m-0">Royalty Information</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-3 gap-[16px] ">
          <div className="">
            <label className="custom_label mb-3">Royalty Agreement Number</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="text"
              placeholder="Royalty Agreement Number"
              name="royalty_agreement_number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.royalty_agreement_number}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">Content</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="text"
              placeholder="Content"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">Agreement Date</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="date"
              placeholder="Agreement Date"
              name="agreement_date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.agreement_date}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">Status</label>
            <input
              className="custom_input border_input_red placeholder-[#FF403B]"
              type="text"
              placeholder="Status"
              name="status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">Publisher Rights</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="text"
              placeholder="Publisher Rights"
              name="publisher_rights"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.publisher_rights}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">License Expiration Date</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="date"
              placeholder="License Expiration Date"
              name="license_expiration_date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.license_expiration_date}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">Publisher Name</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="text"
              placeholder="Publisher Name"
              name="publisher_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.publisher_name}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">Publisher URL</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="text"
              placeholder="Publisher URL"
              name="publisher_url"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.publisher_url}
            />
          </div>
          <div className="">
            <label className="custom_label mb-3">Publisher Terms</label>
            <input
              className="custom_input border_input placeholder-primarycolor2"
              type="text"
              placeholder="Publisher Terms"
              name="publisher_terms"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.publisher_terms}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
