import { mdiPhonePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhonePlus(props: IconComponentProps) {
  return <Icon path={mdiPhonePlus} {...props} />;
}

export { mdiPhonePlus as path };
