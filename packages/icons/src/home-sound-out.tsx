import { mdiHomeSoundOut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSoundOut(props: IconComponentProps) {
  return <Icon path={mdiHomeSoundOut} {...props} />;
}

export { mdiHomeSoundOut as path };
