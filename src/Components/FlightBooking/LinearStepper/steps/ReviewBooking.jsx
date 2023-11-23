import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import {
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ReviewBooking = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormikContext();
  const adultFields = formik.values.adults;
  const childrenFields = formik.values.children;
  const infantFields = formik.values.infants;

  const {
    origin,
    destination,
    journeyDate,
    returnDate,
    number_of_adults,
    number_of_children,
    number_of_infants,
    airline,
    code,
    cabin,
    adultFare,
    childFare,
    infantFare,
    salesCommission,
    taxes,
    discount,
  } = formik.values;

  const [totalAdultFare, setTotalAdultFare] = useState(
    number_of_adults * adultFare
  );
  const [totalChildrenFare, setTotalChildrenFare] = useState(
    number_of_children * childFare
  );
  const [totalInfantFare, setTotalInfantFare] = useState(
    number_of_infants * infantFare
  );
  const [totalAmount, setTotalAmount] = useState(
    totalAdultFare + totalInfantFare + totalChildrenFare
  );

  useEffect(() => {
    setTotalAdultFare(number_of_adults * adultFare);
    setTotalChildrenFare(number_of_children * childFare);
    setTotalInfantFare(number_of_infants * infantFare);
    setTotalAmount(totalAdultFare + totalInfantFare + totalChildrenFare);
  }, [
    adultFare,
    childFare,
    formik.values,
    infantFare,
    number_of_adults,
    number_of_children,
    number_of_infants,
    totalAdultFare,
    totalChildrenFare,
    totalInfantFare,
  ]);

  return (
    <>
      <React.Fragment>
        <Typography variant="h6" align="center" gutterBottom>
          1 Booking Information Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Origin</TableCell>
                <TableCell>{origin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Destination</TableCell>
                <TableCell>{destination}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Journey Date</TableCell>
                <TableCell>{journeyDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Return Date</TableCell>
                <TableCell>{returnDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number of Adults</TableCell>
                <TableCell>{number_of_adults}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number of Children</TableCell>
                <TableCell>{number_of_children}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number of Infants</TableCell>
                <TableCell>{number_of_infants}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" align="center" gutterBottom>
          2 Flight Information Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Airline</TableCell>
                <TableCell>{airline}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell>{code}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cabin</TableCell>
                <TableCell>{cabin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Adult Fare</TableCell>
                <TableCell>{totalAdultFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Children Fare</TableCell>
                <TableCell>{totalChildrenFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Infant Fare</TableCell>
                <TableCell>{totalInfantFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sales Commission</TableCell>
                <TableCell>{salesCommission}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Taxes</TableCell>
                <TableCell>{taxes}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Discount</TableCell>
                <TableCell>{discount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" align="center" gutterBottom>
          3 Passenger Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Passenger</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adultFields.map((field, index) => (
                <TableRow key={index}>
                  <TableCell>Adult {index + 1}</TableCell>
                  <TableCell>{field.surName}</TableCell>
                  <TableCell>{field.firstName}</TableCell>
                  <TableCell>{field.date_of_birth}</TableCell>
                  <TableCell>{field.email}</TableCell>
                  <TableCell>{field.phoneNumber}</TableCell>
                </TableRow>
              ))}
              {childrenFields.map((field, index) => (
                <TableRow key={index}>
                  <TableCell>Child {index + 1}</TableCell>
                  <TableCell>{field.surName}</TableCell>
                  <TableCell>{field.firstName}</TableCell>
                  <TableCell>{field.date_of_birth}</TableCell>
                  <TableCell>{field.email}</TableCell>
                  <TableCell>{field.phoneNumber}</TableCell>
                </TableRow>
              ))}
              {infantFields.map((field, index) => (
                <TableRow key={index}>
                  <TableCell>Infant {index + 1}</TableCell>
                  <TableCell>{field.surName}</TableCell>
                  <TableCell>{field.firstName}</TableCell>
                  <TableCell>{field.date_of_birth}</TableCell>
                  <TableCell>{field.email}</TableCell>
                  <TableCell>{field.phoneNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" align="center" gutterBottom>
          4 Fares Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Total Adult Fare</TableCell>
                <TableCell>{isNaN(totalAdultFare) ? "" : totalAdultFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Children Fare</TableCell>
                <TableCell>
                  {isNaN(totalChildrenFare) ? "" : totalChildrenFare}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Infant Fare</TableCell>
                <TableCell>{isNaN(totalInfantFare) ? "" : totalInfantFare}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Grand Total</TableCell>
                <TableCell>{isNaN(totalAmount) ? "" : totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Grid>
          <Field
            name="pnrNumber"
            render={({ field }) => (
              <TextField
                label="PNR Number"
                variant="outlined"
                fullWidth={true}
                {...field}
              />
            )}
          />
        </Grid>
      </React.Fragment>
    </>
  );
};

export default ReviewBooking;
