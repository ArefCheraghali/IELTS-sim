import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import useTextHighlight from "app/hooks/useTextHighlight";
import HighlightContextMenu from "app/components/HighlightContextMenu.jsx";

const MemoText = () => {
  const {
    anchorEl,
    menuPosition,
    textRef,
    handleContextMenu,
    handleHighlight,
    handleClearHighlights,
    handleClose,
  } = useTextHighlight();

  return (
    <Box sx={{ userSelect: "text" }}>
      <Box
        onContextMenu={handleContextMenu}
        ref={textRef}
        sx={{ userSelect: "text" }}
      >
        <HighlightContextMenu
          anchorEl={anchorEl}
          menuPosition={menuPosition}
          handleClose={handleClose}
          handleHighlight={handleHighlight}
          handleClearHighlights={handleClearHighlights}
        />
        <Typography variant="h5" gutterBottom>
          <b>Memo: To all key holders and persons responsible for locking up</b>
        </Typography>
        <Box sx={{ marginTop: 2, textAlign: "left", mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            Head office is stream lining procedures for the safety and security
            of employees, cash and stock. Below is the procedure for closing the
            Vern's Clothing Warehouse. Please follow these steps in all
            branches.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <b>
              <u>Vern's Clothing Warehouse: Procedure for closing the shop </u>
            </b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Tasks: </b>
          </Typography>
          <Box
            sx={{
              width: "90%",
              height: "auto",
              my: 1,
              ml: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "flex-start",
              borderStyle: "solid",
              borderWidth: "2px",
              padding: "1em",
              textAlign: "left",
            }}
          >
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              <b>One hour before the store closes </b>
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Restock shelves, making a note of anything that needs to be
              ordered.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Assign cleaning duties to staff members.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Take defective returned merchandise to the back room to be
              processed / sent to warehouse.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Put all non-defective returned merchandise back on shelves.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Check window display and wheel the external sale table back
              inside.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "90%",
              height: "auto",
              my: 1,
              ml: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "flex-start",
              borderStyle: "solid",
              borderWidth: "2px",
              padding: "1em",
              textAlign: "left",
            }}
          >
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              <b>closing the shop </b>
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Walk the floor, double-checking for any remaining customers. Be
              sure to check the fitting rooms, pulling back curtains as you go.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Lock the side door with the key and bolt it at both top and
              bottom
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Lock the automatic door (main entry) by pushing the red button
              to the left of the door.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Observe departing employees, ensuring that all merchandise being
              taken has been paid for.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - No friends are allowed on the premises at closing time. Please
              have them wait outside.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "90%",
              height: "auto",
              my: 1,
              ml: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "flex-start",
              borderStyle: "solid",
              borderWidth: "2px",
              padding: "1em",
              textAlign: "left",
            }}
          >
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              <b>Handling registers and money </b>
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Close the cash register and lock the till.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Count cash away from registers so that it will not be visible to
              people who might be able to view the activity from outside the
              store through windows. The back office is the best place for
              counting money.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Place the till tape, daily report and all money in the safe
              there.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Two people must always be present when the safe is open and
              money is being counted, so always do this in the presence of a
              co-worker.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Leave register drawers open to better protect point of sale
              terminals in the event of a break-in because burglars are likely
              to damage a register if trying to gain access.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Leave the appropriate lighting on - a sign near the main switch
              panel indicates which lights are not to be turned off.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Activate the burglar alarm to the left of the front entrance by
              typing the code into the pad followed by the # key. This will give
              you 90 seconds to lock up and leave.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: "10px" }}>
              - Leave the key with security if you are not rostered on the
              following day.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="h6" gutterBottom>
          <b>The Heritage Hotel</b>
        </Typography>
        <Box sx={{ marginTop: 2, textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            <b>Uniform policy</b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Heritage Hotel is committed to dress standards that will enhance
            its corporate image, and it is essential that grooming and
            presentation be of the highest standard at all times.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Employees are required to maintain a neat, clean, well-groomed
            appearance. The discretion of what constitutes acceptable grooming
            rests with the company.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Uniform specifications</b>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                Staff who have contact with customers (e.g. reception and
                management) are to wear either a white or black shirt with a
                pocket that displays the Heritage Hotel insignia (employees are
                issued one shirt in each colour). These staff members will be
                issued with a burgundy Heritage Hotel jacket, to be worn with
                the regulation black skirt or trousers, also provided by the
                Hotel.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                Those working back-of-house in maintenance and housekeeping
                roles will be provided with two white Bob Charles shirts with
                the Hotel insignia on the front. Trousers or a skirt in navy
                blue will also be issued by the Hotel.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                Shoes are to be comfortable and clean. T hey should be black and
                with a heel of less than 3cm. For safety reasons, no open-toed
                shoes are permitted.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                Anyone employed by the Heritage Hotel is to ensure their name
                badge is visible at all times during their shift.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" gutterBottom>
            <b>Care of Uniform</b>
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                The hotel issues complete uniforms to all staff, which are
                signed for on commencement of employment and must be returned
                when leaving the company.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                The hotel uniform, whether for management / reception or
                maintenance / housekeeping should always be freshly pressed with
                no stains, loose threads or missing buttons.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                Those working as managers or at reception may store their
                uniform in the locker in the office to the rear of reception and
                keep the jacket there during the shift if it is not being worn.
                It can be laundered when necessary in the hotel laundry.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                Those working in maintenance and housekeeping may also have
                their uniform laundered. Uniforms can be placed in the laundry
                basket in the ground-floor staffroom and picked up from the
                shelf in the same room for the next shift. It must be recorded
                on the wall chart when an item is dropped off or collected.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" gutterBottom sx={{ mb: "10px" }}>
                If the management / reception uniform is torn, please take it
                directly to Ms Nichols in the laundry. Maintenance /
                housekeeping staff should notify their team leader if their
                uniform needs mending or replacing.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default MemoText;
