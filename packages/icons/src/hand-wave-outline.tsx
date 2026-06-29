import { mdiHandWaveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandWaveOutline(props: IconComponentProps) {
  return <Icon path={mdiHandWaveOutline} {...props} />;
}

export { mdiHandWaveOutline as path };
