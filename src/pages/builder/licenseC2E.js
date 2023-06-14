import React from 'react';
import { Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';

import RoyaltyBasedContentCard from './royaltyBasedContentCard';

const LicenseC2E = ({ setOpenRoyalties }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="w-full h-full bg-white calc-function p-[20px] ">
      <div className="flex justify-between">
        <div>
          <h1 className=" flex items-center gap-[10px] m-[0] text-primarycolor bolder text-[28px]">
            C2E License Settings
          </h1>
          <p>Manage your C2E License settings here.</p>
        </div>

        <div className="flex gap-[10px]">
          <button
            onClick={() => {
              setOpenRoyalties(false);
            }}
            className=" mb-[15px] w-[100px] h-[40px] flex items-center justify-center rounded-[20px] bg-[#fff] border solid border-[#084892]  text-primary-color bold"
          >
            Cancel
          </button>

          <button className=" mb-[15px] w-[100px] h-[40px] flex items-center justify-center rounded-[20px] bg-[#084892]  text-[white] bold">
            Save
          </button>
        </div>
      </div>
      <div className="border border-dashed border-x-yellowColor mb-[12px]"></div>
      <div className="w-full h-full ">
        <h2 className="mb-2 text-2xl font-medium text-black">
          C2E Title: Activity Sampler
        </h2>
        <button className="w-[172px] h-auto border-none outline-none py-2 px-3 text-white bg-[#0CA789] rounded font-normal text-sm">
          C2e-12345678
        </button>
        <div className="flex gap-[40px]">
          <div className=" mt-[30px] w-[50%]">
            <Formik
              initialValues={{
                copyright_year: '',
                copyright_notice: '',
                c2e_price: '',
                purchased: false,
                subscription: false,
                open: false,
                royalty_agreement_number: '',
                content: '',
                agreement_date: '',
                status: '',
                publisher_rights: '',
                license_expiration_date: '',
                publisher_name: '',
                publisher_url: '',
                publisher_terms: '',
              }}
              validate={(values) => {
                const errors = {};
                if (!values.copyright_notice) {
                  errors.copyright_notice = 'Required';
                }
                if (!values.copyright_year) {
                  errors.copyright_year = 'Required';
                }
                if (!values.c2e_price) {
                  errors.c2e_price = 'Required';
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
                      <input
                        type="checkbox"
                        name="purchased"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.purchased}
                        checked={!!values?.purchased}
                      />
                      <label
                        className={`font-normal text-sm m-0 ${
                          values?.purchased === true
                            ? 'text-[#2E68BF]'
                            : 'text-[#515151]'
                        }`}
                      >
                        Purchased
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="subscription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.subscription}
                        checked={!!values?.subscription}
                      />
                      <label
                        className={`font-normal text-sm m-0 ${
                          values?.subscription === true
                            ? 'text-[#2E68BF]'
                            : 'text-[#515151]'
                        }`}
                      >
                        Subscription
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="open"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.open}
                        checked={!!values?.open}
                      />
                      <label
                        className={`font-normal text-sm m-0 ${
                          values?.open === true
                            ? 'text-[#2E68BF]'
                            : 'text-[#515151]'
                        }`}
                      >
                        Open
                      </label>
                    </div>
                  </div>

                  <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mb-4 mt-7">
                    Set Copyright Attributes
                  </h1>

                  <div className="flex flex-col gap-2">
                    <label className="mb-2 custom_label">
                      Copyright Notice
                    </label>
                    <textarea
                      className="mb-4 custom_input border_input placeholder-primarycolor2"
                      name="copyright_notice"
                      placeholder="Copyright Notice"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.copyright_notice}
                      cols="10"
                      rows="5"
                    />
                    <label className="mb-2 custom_label">Copyright Year</label>
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

                  <RoyaltyInformationModal
                    modalShow={modalShow}
                    setModalShow={setModalShow}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                  />
                  <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mb-4 mt-8">
                    C2E Price
                  </h1>
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
                  {/* <div className="ml-auto mt-7">
                    <button
                      type="submit"
                      className="text-white primary-btn bg-primarycolor save-btn"
                      disabled={isSubmitting}
                    >
                      SAVE
                    </button>
                  </div> */}
                </form>
              )}
            </Formik>
          </div>
          <div className=" w-[50%]">
            <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mb-4 mt-8">
              Royalty-Based Content
            </h1>

            <div className="flex items-center gap-[26px] flex-wrap">
              <RoyaltyBasedContentCard setModalShow={setModalShow} />
              <RoyaltyBasedContentCard setModalShow={setModalShow} />
              <RoyaltyBasedContentCard setModalShow={setModalShow} />
              <RoyaltyBasedContentCard setModalShow={setModalShow} />

              <RoyaltyBasedContentCard setModalShow={setModalShow} />

              <RoyaltyBasedContentCard setModalShow={setModalShow} />
              <RoyaltyBasedContentCard setModalShow={setModalShow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseC2E;

const RoyaltyInformationModal = ({
  handleChange,
  handleBlur,
  values,
  modalShow,
  setModalShow,
}) => {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal"
    >
      <Modal.Header closeButton className="">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="m-0 text-2xl font-semibold text-primarycolor2">
            Royalty Information
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-3 gap-[16px] ">
          <div className="">
            <label className="mb-3 custom_label">
              Royalty Agreement Number
            </label>
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
            <label className="mb-3 custom_label">Content</label>
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
            <label className="mb-3 custom_label">Agreement Date</label>
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
            <label className="mb-3 custom_label">Status</label>
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
            <label className="mb-3 custom_label">Publisher Rights</label>
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
            <label className="mb-3 custom_label">License Expiration Date</label>
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
            <label className="mb-3 custom_label">Publisher Name</label>
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
            <label className="mb-3 custom_label">Publisher URL</label>
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
            <label className="mb-3 custom_label">Publisher Terms</label>
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
