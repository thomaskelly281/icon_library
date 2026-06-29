import { mdiVote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vote(props: IconComponentProps) {
  return <Icon path={mdiVote} {...props} />;
}

export { mdiVote as path };
