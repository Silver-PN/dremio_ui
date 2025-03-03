/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { shallow } from "enzyme";
import Immutable from "immutable";
import jobsUtils from "../../../../utils/jobsUtils";
import timeUtils from "../../../../utils/timeUtils";

import JobTr from "./JobTr";

describe("JobsTr-spec", () => {
  let minimalProps;
  let commonProps;
  beforeEach(() => {
    minimalProps = {
      queryType: "edit",
      active: false,
      even: false,
      onClick: () => {},
      job: Immutable.fromJS({
        id: "28d39e4c-71fc-aa25-2886-bd2eb1a68d4e",
        state: "COMPLETED",
        user: "root",
        jobDataset: "tmp.UNTITLED",
        startTime: 1462526387154,
        endTime: 1462526389592,
        description: "SELECT * FROM dremio",
      }),
    };
    commonProps = {
      ...minimalProps,
      containsTextValue: "",
    };
  });

  it("should render with minimal props without exploding", () => {
    const wrapper = shallow(<JobTr {...minimalProps} />);
    expect(wrapper).to.have.length(1);
  });

  it("render Job Row", () => {
    const wrapper = shallow(<JobTr {...commonProps} />);
    expect(wrapper.hasClass("jobs-table-tr")).to.be.true;
  });

  it("Job Row content", () => {
    const wrapper = shallow(<JobTr {...commonProps} />);
    expect(wrapper.find(".user").find("TextHighlight").prop("text")).to.equal(
      commonProps.job.get("user"),
    );
    expect(wrapper.find(".startTime").text()).to.eql(
      timeUtils.formatTime(commonProps.job.get("startTime")),
    );
    expect(wrapper.find(".endTime").text()).to.eql(
      timeUtils.formatTime(commonProps.job.get("endTime")),
    );
    expect(wrapper.find(".duration").text()).to.eql(
      jobsUtils.getJobDuration(
        commonProps.job.get("startTime"),
        commonProps.job.get("endTime"),
      ),
    );
    expect(wrapper.find(".sql").find("TextHighlight").prop("text")).to.equal(
      commonProps.job.get("description"),
    );
    expect(wrapper.find("JobStateIcon").first().prop("state")).to.equal(
      "COMPLETED",
    );
  });
});
