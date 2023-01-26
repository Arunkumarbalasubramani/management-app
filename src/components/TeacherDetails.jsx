import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import Man3Icon from "@mui/icons-material/Man3";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
const TeacherDetails = () => {
  const { teacherId } = useParams();
  const [teachersData, setTeachersData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://63ce6b066d27349c2b6cf20a.mockapi.io/teachers/${teacherId}`
      );
      setTeachersData(response.data);
    };
    getData();
  }, [teacherId]);

  const {
    id,
    address,
    name,
    avatar,
    city,
    emailid,
    emergencyno,
    gender,
    expertise,
    phone,
    bloodgroup,
    classedu,
  } = teachersData;
  return (
    <div className="page-container">
      <div className="wrapper">
        <h1 className="pageHeading">Teachers Details</h1>
        <div className="action-btns">
          <Button
            variant="contained"
            endIcon={<HomeIcon />}
            onClick={() => navigate(`/teachers`)}
          >
            Back to Home
          </Button>

          <div>
            <Tooltip title="Edit Details" arrow>
              <IconButton
                aria-label="edit"
                size="large"
                onClick={() => navigate(`/teachers/edit/${id}`)}
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" arrow>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => navigate(`/teachers/delete/${id}`)}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <div className="details-container">
          <div className="picture">
            <img src={avatar} alt="..." className="profile-pic" />
            <h4>
              <LinkedInIcon />
              @linkedIn.com
            </h4>
          </div>
          <div className="details-wrapper">
            <div className="detail-list">
              <div className="detail">
                <DriveFileRenameOutlineIcon />
                <h4>Name:</h4>
                <div className="list">
                  <h4>{name}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <EmailIcon />
                <h4> Email:</h4>
                <div className="list">
                  <h4>{emailid}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <Man3Icon />
                <h4>Gender:</h4>
                <div className="list">
                  <h4>{gender?.toUpperCase()}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <Man3Icon />
                <h4>ID Card No:</h4>
                <div className="list">
                  <h4>{id}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <PhoneAndroidIcon />
                <h4> Mobile-No:</h4>
                <div className="list">
                  <h4>+91-{phone}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <MenuBookIcon />
                <h4> Expertise:</h4>
                <div className="list">
                  <h4>{expertise}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <BloodtypeIcon />
                <h4> Blood Type:</h4>
                <div className="list">
                  <h4>{bloodgroup} Ve</h4>
                </div>
              </div>
            </div>

            <div className="detail-list">
              <div className="detail">
                <ContactEmergencyIcon />
                <h4> Emergency Contact:</h4>
                <div className="list">
                  <h4>+91-{emergencyno}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <HomeIcon />
                <h4> Address:</h4>
                <div className="list">
                  <h4>{address}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <LocationCityIcon />
                <h4> City:</h4>
                <div className="list">
                  <h4>{city}</h4>
                </div>
              </div>
            </div>
            <div className="detail-list">
              <div className="detail">
                <SchoolIcon />
                <h4> Class Educator:</h4>
                <div className="list">
                  <h4>
                    {classedu}
                    <sup>th</sup> Standard
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
