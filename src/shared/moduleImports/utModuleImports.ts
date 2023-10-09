import {
  TextField, Button, Select, Radio,
  Checkbox, Typography, Autocomplete,
  Rating, Box, Stack, Container, Link, Grid,
  Card, CardContent, CardMedia, InputLabel,
  TextareaAutosize, Badge, Avatar, AppBar, Toolbar,
  List, ListItem, ListItemAvatar, ListItemText, Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Carousel from "react-elastic-carousel";
import CpRadioInputControl from "../../components/form/controls/radio/radioInputControl/CpRadioInputControl";
import CpCheckboxInputControl from "../../components/form/controls/check/checkboxInputControl/CpCheckboxInputControl";
import CpSelectInputControl from "../../components/form/controls/selections/selectInputControl/CpSelectInputControl";
import CpSwitchControl from "../../components/form/controls/switch/switchControl/CpSwitchControl";
import CpTextInputControl from "../../components/form/controls/text/CpTextInputControl";
import CpFormController from "../../components/form/formController/CpFormController";
import CpRecaptcha from "../../components/recaptcha/CpRecaptcha";
import CpPageHeader from "../../components/pageHeader/CpPageHeader";
import CpDataTableWithFiltering from "../../components/dataTable/dataTableWithFiltering/CpDataTableWithFiltering";
import CpCountrySelect from "../../components/countrySelect/CpCountrySelect";
import CpMultipleSelectCheckmarks from "../../components/multipleSelect/CpMultipleSelectCheckmarks";
import CpCustomInputDatePicker from "../../components/datePicker/CpCustomInputDatePicker";
import CpCountryCodeSelect from "../../components/countryCodeSelect/CpCountryCodeSelect";

export const CpTextField = TextField;
export const CpButton = Button;
export const CpSelect = Select;
export const CpRadio = Radio;
export const CpCheckbox = Checkbox;
export const CpTypography = Typography;
export const CpDataGrid = DataGrid;
export const CpRating = Rating;
export const CpBox = Box;
export const CpContainer = Container;
export const CpAutocomplete = Autocomplete;
export const CpStack = Stack;
export const CpLink = Link;
export const CpGrid = Grid;
export const CpCard = Card;
export const CpCardContent = CardContent;
export const CpCardMedia = CardMedia;
export const CpInputLabel = InputLabel;
export const CpTextarea = TextareaAutosize;
export const CpBadge = Badge;
export const CpAvatar = Avatar;
export const CpAppBar = AppBar;
export const CpToolBar = Toolbar;
export const CpDatePicker = CpCustomInputDatePicker;
export const CpList = List;
export const CpListItem = ListItem;
export const CpListItemAvatar = ListItemAvatar;
export const CpListItemText = ListItemText;
export const CpDivider = Divider;
export const CpCarousel = Carousel;

export const CpRecaptchaComp = CpRecaptcha;

export const CpPageHeaderComp = CpPageHeader;

export const CpForm = CpFormController;
export const CpFormRadioInput = CpRadioInputControl;
export const CpFormCheckboxInput = CpCheckboxInputControl;
export const CpFormSelectionInput = CpSelectInputControl;
export const CpFormSwitchInput = CpSwitchControl;
export const CpFormTextFieldInput = CpTextInputControl;

export const CpCustomDataTable = CpDataTableWithFiltering;

export const CpAutocompleteCountrySelect = CpCountrySelect;
export const CpMultipleSelect = CpMultipleSelectCheckmarks;
export const CpAutocompleteCountryCodeSelect = CpCountryCodeSelect;

export { default as CpDialog1 } from "../../components/feedback/dialogs/dialogWrap1/CpDialogWrap1";
export { default as CpDialog2 } from "../../components/feedback/dialogs/dialogWrap2/CpDialogWrap2";
export { default as CpDialog3 } from "../../components/feedback/dialogs/dialogWrap3/CpDialogWrap3";
export { default as CpPaper } from "../../components/paper/CpPaper";
export { default as CpAutocompleteField } from "../../components/select/autoComplete/CpAutoComplete";
export { default as CpFormControlLabel } from "@mui/material/FormControlLabel";
export { default as CpCollapse } from "@mui/material/Collapse";
export { default as CpListItemButton } from "@mui/material/ListItemButton";
