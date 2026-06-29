import { mdiVirusOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VirusOffOutline(props: IconComponentProps) {
  return <Icon path={mdiVirusOffOutline} {...props} />;
}

export { mdiVirusOffOutline as path };
