import { mdiAccountSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSettings(props: IconComponentProps) {
  return <Icon path={mdiAccountSettings} {...props} />;
}

export { mdiAccountSettings as path };
