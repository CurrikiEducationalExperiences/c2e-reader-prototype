import React, { useState } from 'react';
import { Formik } from 'formik';
import { Tab, Tabs } from 'react-bootstrap';
import { TagsInput } from 'react-tag-input-component';
import Opensidebar from '../../assets/images/settings.gif';
import Closesidebar from '../../assets/images/close-sidebar.svg';

const RightSide = () => {
  const [settings, setSettings] = useState(false);
  return (
    <div
      className={` ${
        settings ? 'w-[400px] p-[20px] pr-[0] ' : 'w-[0]'
      }  bg-white `}
    >
      <div>
        <div
          onClick={() => {
            setSettings(!settings);
          }}
          className=" z-[-1] absolute top-[50%] left-[-40px] cursor-pointer w-[80px] h-[80px] bg-white border solid border-[#ccc] rounded-[50%] flex pl-[10px] items-center"
        >
          <img src={Opensidebar} alt="" className="cursor-pointer w-[25px]" />
        </div>
      </div>
      {settings && (
        <>
          <h1 className=" flex items-center gap-[10px] m-[0] text-primarycolor bolder text-[28px]">
            C2E Settings
          </h1>
          <p>Manage your C2Es setting here.</p>

          <div className="relative w-full overflow-auto h-[calc(100vh-150px)] pr-[20px]">
            <div className="builder-setting-tabs ">
              <Tabs defaultActiveKey="Metadata" id="uncontrolled-tab-example">
                <Tab eventKey="Metadata" title="Metadata">
                  <div className="w-full ">
                    <Formik
                      initialValues={{
                        project_name: '',
                        project_detail: '',
                        author_name: '',
                        author_email: '',
                        author_url: '',
                        publisher_name: 'Curriki Reference Implementation',
                        publisher_email: 'info@curriki.org',
                        publisher_url: 'https://c2e.curriki.org',
                        password: '',
                        keywords: [],
                      }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.author_email) {
                          errors.author_email = 'Required';
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.author_email
                          )
                        ) {
                          errors.author_email = 'Invalid email address';
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
                        setFieldValue,
                        /* and other goodies */
                      }) => (
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col "
                        >
                          <div className="flex flex-col gap-2">
                            <input
                              className="custom_input"
                              type="text"
                              name="project_name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.project_name}
                              placeholder="C2E Title ..."
                            />

                            <textarea
                              className="custom_input"
                              name="project_detail"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.project_detail}
                              cols="10"
                              rows="5"
                              placeholder="C2E Description ..."
                            />

                            <p className="mb-1 text-sm font-normal text-black">
                              Keywords
                            </p>

                            <TagsInput
                              value={values.keywords}
                              onChange={(e) => {
                                if (setFieldValue) {
                                  setFieldValue('keywords', e);
                                }
                              }}
                              name="keywords"
                              placeHolder="enter keywords"
                            />
                          </div>
                          <div className="my-[16px]">
                            <h1 className="font-medium text-base text-black border-b-[1px] border-solid border-b-[#dddddd] pb-1 mb-[16px]">
                              Author
                            </h1>
                            <label className="custom_label">Name</label>
                            <input
                              className="custom_input border_input"
                              type="text"
                              name="author_name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.author_name}
                            />
                            <label className="custom_label">Email</label>
                            <input
                              className="custom_input border_input"
                              type="email"
                              name="author_email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.author_email}
                            />

                            <label className="custom_label">Url</label>
                            <input
                              className="custom_input border_input"
                              type="text"
                              name="author_url"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.author_url}
                            />
                          </div>
                          <div className="mb-[30px]">
                            <h1 className="font-medium text-base text-black border-b-[1px] border-solid border-b-[#dddddd] pb-1 mb-[16px]">
                              Publisher
                            </h1>
                            <label className="custom_label">Name</label>
                            <input
                              className="custom_input border_input"
                              type="text"
                              name="publisher_name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.publisher_name}
                              disabled
                            />
                            <label className="custom_label">Email</label>
                            <input
                              className="custom_input border_input"
                              type="email"
                              name="publisher_email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.publisher_email}
                              disabled
                            />

                            <label className="custom_label">Url</label>
                            <input
                              className="custom_input border_input"
                              type="text"
                              name="publisher_url"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.publisher_url}
                              disabled
                            />
                          </div>

                          <h3 className="m-0 text-sm font-normal text-black">
                            Version: 0.1
                          </h3>

                          <button type="submit" disabled={isSubmitting}>
                            Submit
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </Tab>
                <Tab eventKey="Manifest" title="Manifest">
                  <p className="">Manifest</p>
                </Tab>
              </Tabs>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSide;
