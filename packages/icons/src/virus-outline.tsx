import { mdiVirusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VirusOutline(props: IconComponentProps) {
  return <Icon path={mdiVirusOutline} {...props} />;
}

export { mdiVirusOutline as path };
