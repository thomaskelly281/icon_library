import { mdiMicrosoftTeams } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftTeams(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftTeams} {...props} />;
}

export { mdiMicrosoftTeams as path };
