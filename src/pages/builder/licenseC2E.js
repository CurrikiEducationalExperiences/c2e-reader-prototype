import React from 'react';
import { Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import { Alert } from "react-bootstrap";

import RoyaltyBasedContentCard from './royaltyBasedContentCard';

const LicenseC2E = ({ setOpenRoyalties, c2e }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const royaltyActivities = [];
  for (let playlist of c2e.playlists) {
    for (let activity of playlist.activities) {
      if (activity.royalty) royaltyActivities.push(activity);
    }
  }

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
          C2E Title: {c2e.general.title}
        </h2>
        <button className="w-[172px] h-auto border-none outline-none py-2 px-3 text-white bg-[#0CA789] rounded font-normal text-sm">
          C2E-{c2e.general.id}
        </button>
        <div className="flex gap-[40px]">
          <div className=" w-[50%]">
            <Formik
              initialValues={{
                copyright_year: '',
                copyright_notice: '',
                c2e_price: '',
                personal_use: false,
                reusable: false,
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
                  <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mt-[30px] mb-4">
                    License type
                  </h1>
                  <div className="flex flex-wrap items-center gap-[27px]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="personal_use"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.personal_use}
                        checked={!!values?.personal_use}
                      />
                      <label
                        className={`font-normal text-sm m-0 ${
                          values?.personal_use === true
                            ? 'text-[#2E68BF]'
                            : 'text-[#515151]'
                        }`}
                      >
                        Personal Use
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="reusable"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.reusable}
                        checked={!!values?.reusable}
                      />
                      <label
                        className={`font-normal text-sm m-0 ${
                          values?.reusable === true
                            ? 'text-[#2E68BF]'
                            : 'text-[#515151]'
                        }`}
                      >
                        Reusable
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
                      value={c2e.copyright.copyrightNotice}
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
                      value={c2e.copyright.CopyrihghtYear}
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
                      type="text"
                      placeholder="C2E Price"
                      name="c2e_price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={c2e.copyright.Price}
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className=" w-[50%]">
            <h1 className="font-semibold text-base text-black pb-2 border-b-[1px] border-solid border-[#DDDDDD] mb-4 mt-8">
              Royalty-Based Content
            </h1>

            <div className="flex items-center gap-[26px] flex-wrap">
              {royaltyActivities.length === 0 && <Alert variant="info">No activities with royalties selected.</Alert>}
              {royaltyActivities.map((activity) => (<RoyaltyBasedContentCard activity={activity} setModalShow={setModalShow} />))}
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
      show={modalShow ? true : false}
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
      {modalShow && (
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
                value={modalShow.royalty.royaltyNumber.toUpperCase()}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">Content</label>
              <input
                className="custom_input border_input placeholder-primarycolor2"
                type="text"
                placeholder="Content"
                name="content"
                value={modalShow.royalty.royaltyContentTitle}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">Agreement Date</label>
              <input
                className="custom_input border_input placeholder-primarycolor2"
                type="text"
                placeholder="Agreement Date"
                name="agreement_date"
                value={modalShow.royalty.agreementDate}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">Status</label>
              <input
                className="custom_input border_input_red placeholder-[#FF403B]"
                type="text"
                placeholder="Status"
                name="status"
                value={modalShow.royalty.status}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">Publisher Rights</label>
              <input
                className="custom_input border_input placeholder-primarycolor2"
                type="text"
                placeholder="Publisher Rights"
                name="publisher_rights"
                value={modalShow.royalty.publisherRights}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">License Expiration Date</label>
              <input
                className="custom_input border_input placeholder-primarycolor2"
                type="text"
                placeholder="License Expiration Date"
                name="license_expiration_date"
                value={modalShow.royalty.licenseExpirationDate}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">Publisher Name</label>
              <input
                className="custom_input border_input placeholder-primarycolor2"
                type="text"
                placeholder="Publisher Name"
                name="publisher_name"
                value={modalShow.royalty.publisherName}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">Publisher URL</label>
              <input
                className="custom_input border_input placeholder-primarycolor2"
                type="text"
                placeholder="Publisher URL"
                name="publisher_url"
                value={modalShow.royalty.publisherURL}
              />
            </div>
            <div className="">
              <label className="mb-3 custom_label">Publisher Terms</label>
              <input
                className="custom_input border_input placeholder-primarycolor2"
                type="text"
                placeholder="Publisher Terms"
                name="publisher_terms"
                value={modalShow.royalty.publisherTerms}
              />
            </div>
          </div>
        </Modal.Body>
      )}

    </Modal>
  );
};
