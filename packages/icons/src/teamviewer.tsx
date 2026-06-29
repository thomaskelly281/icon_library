import { mdiTeamviewer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Teamviewer(props: IconComponentProps) {
  return <Icon path={mdiTeamviewer} {...props} />;
}

export { mdiTeamviewer as path };
