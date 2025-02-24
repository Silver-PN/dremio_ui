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
import { useState } from "react";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import { Label, Tooltip } from "dremio-ui-lib";
import jobsUtils from "utils/jobsUtils";
import { getIconPath } from "#oss/utils/getIconPath";
import TextWithHelp from "#oss/components/TextWithHelp";
import { getIconByEntityType } from "utils/iconUtils";

import "./Scans.less";

const renderScanTooltip = (tooltip, scanName) => {
  return tooltip ? (
    <TextWithHelp
      text={tooltip}
      helpText={scanName}
      showToolTip
      color="light"
    />
  ) : (
    scanName
  );
};

const renderIcon = (iconName, className, isGradient) => {
  return (
    <Tooltip title="Job.Reflection">
      {!isGradient ? (
        <dremio-icon
          name={iconName}
          alt="Reflection"
          class={className}
          data-qa={iconName}
        />
      ) : (
        <img
          src={getIconPath(iconName)}
          alt="Reflection"
          className={className}
          data-qa={iconName}
        />
      )}
    </Tooltip>
  );
};
const ScanItem = ({ scan, scansForFilter, intl: { formatMessage } }) => {
  const [isScanOpen, setIsScanOpen] = useState(false);
  const collapseIconUsed = isScanOpen
    ? "interface/down-chevron"
    : "interface/right-chevron";
  const dataSetType = scan.get("datasetType");
  return (
    <div className="scans-content">
      <div className="scans-content__header">
        <span
          data-qa="dropdown-customer"
          onClick={() => setIsScanOpen(!isScanOpen)}
          className="scans-content__expandIcon"
          tabIndex={0}
          onKeyDown={(e) => e.code === "Enter" && setIsScanOpen(!isScanOpen)}
          aria-label={`${formatMessage({ id: `Scans.${isScanOpen ? "Collapse" : "Expand"}` })}: ${scan.get("name")}`}
        >
          {renderIcon(collapseIconUsed, "scans-content__dropdownIcon")}
        </span>
        {dataSetType === "REFLECTION" ? (
          renderIcon(
            "interface/reflection",
            "scans-content__reflectionIcon",
            true,
          )
        ) : (
          <dremio-icon
            style={{
              inlineSize: "24px",
              blockSize: "24px",
            }}
            name={getIconByEntityType(dataSetType)}
          ></dremio-icon>
        )}
        <span className="scans-content__dataLabel">
          {renderScanTooltip(scan.get("description"), scan.get("name"))}
        </span>
      </div>
      {isScanOpen && (
        <div className="gutter-left">
          {scansForFilter.map((item, scanIndex) => {
            const labelValue =
              item.key === "nrScannedRows"
                ? jobsUtils.getFormattedNumber(scan.get(item.key))
                : scan.get(item.key);
            return (
              <div
                key={`scansForFilter-${scanIndex}`}
                className="scans-content__dataWrapper"
              >
                <Label
                  value={formatMessage({ id: item.label })}
                  className="scans-content__dataLabelHeader"
                />
                <span className="scans-content__dataContent">{labelValue}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

ScanItem.propTypes = {
  scansForFilter: PropTypes.array,
  scan: PropTypes.object,
  intl: PropTypes.object.isRequired,
};
export default injectIntl(ScanItem);
