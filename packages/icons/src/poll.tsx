import { mdiPoll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Poll(props: IconComponentProps) {
  return <Icon path={mdiPoll} {...props} />;
}

export { mdiPoll as path };
