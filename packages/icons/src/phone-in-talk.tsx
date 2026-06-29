import { mdiPhoneInTalk } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneInTalk(props: IconComponentProps) {
  return <Icon path={mdiPhoneInTalk} {...props} />;
}

export { mdiPhoneInTalk as path };
