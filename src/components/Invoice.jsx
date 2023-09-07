import React from "react";
import { BiMenu } from "react-icons/bi";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { AiOutlineEye } from "react-icons/ai";
import { BiSolidPrinter } from "react-icons/bi";
import { GoDownload } from "react-icons/go";

function Invoice(props) {
  return (
    <div
      style={{
        width: "20%",
        boxShadow: " 0px 2px 20px 0px rgba(0, 0, 0, 0.09)",
        marginLeft: "10px",
        marginBottom: "20px",
      }}
    >
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "normal",
          paddingInline: "10px",
        }}
      >
        <p>Invoice</p>

        <CDropdown>
          <CDropdownToggle
            style={{
              backgroundColor: "white",
              color: "#000000",
              border: "none",
              padding: "0",
              height: "25px",
            }}
            color="secondary"
          >
            <BiMenu style={{ fontSize: "25px" }} />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Show <AiOutlineEye />
              </div>
            </CDropdownItem>
            <CDropdownItem>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Print
                <BiSolidPrinter />
              </div>
            </CDropdownItem>
            <CDropdownItem>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Download <GoDownload />
              </div>
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>

      <div className="container">
        <div
          style={{
            backgroundColor: "#F1F5F9",
            border: "1.5px dashed #CBD5E1",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <div
            className="amount-details"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBlock: "10px",
            }}
          >
            <p>{props.amount} $</p>
            <p
              style={{
                color: "#64748B",
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
              }}
            >
              Amount
            </p>
          </div>
          <div
            className="date-details"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBlock: "10px",
            }}
          >
            <p>{props.date}</p>
            <p
              style={{
                color: "#64748B",
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
              }}
            >
              Due Date{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <p
          style={{
            color: "#64748B",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          Invoice ID : {props.id}
        </p>
        {props.payed ? (
          <div
            style={{
              borderRadius: "30px",
              border: "none",
              fontSize: "14px",
              backgroundColor: "#D4EFDF",
              color: "#8BC34A",
              paddingInline: "8px",
            }}
            disabled
          >
            Payed
          </div>
        ) : (
          <div
            style={{
              borderRadius: "30px",
              border: "none",
              fontSize: "14px",
              backgroundColor: "#FDEBD0",
              color: "#FF9800",
              paddingInline: "8px",
            }}
            disabled
          >
            To pay
          </div>
        )}
      </div>
    </div>
  );
}

export default Invoice;
