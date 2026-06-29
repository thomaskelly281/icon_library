import { mdiPhoneMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneMinus(props: IconComponentProps) {
  return <Icon path={mdiPhoneMinus} {...props} />;
}

export { mdiPhoneMinus as path };
