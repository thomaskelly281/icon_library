import { mdiPhoneRotateLandscape } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRotateLandscape(props: IconComponentProps) {
  return <Icon path={mdiPhoneRotateLandscape} {...props} />;
}

export { mdiPhoneRotateLandscape as path };
