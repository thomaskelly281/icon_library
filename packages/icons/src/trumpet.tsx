import { mdiTrumpet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Trumpet(props: IconComponentProps) {
  return <Icon path={mdiTrumpet} {...props} />;
}

export { mdiTrumpet as path };
