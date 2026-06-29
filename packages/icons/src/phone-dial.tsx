import { mdiPhoneDial } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneDial(props: IconComponentProps) {
  return <Icon path={mdiPhoneDial} {...props} />;
}

export { mdiPhoneDial as path };
