import { mdiPhoneRotatePortrait } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRotatePortrait(props: IconComponentProps) {
  return <Icon path={mdiPhoneRotatePortrait} {...props} />;
}

export { mdiPhoneRotatePortrait as path };
