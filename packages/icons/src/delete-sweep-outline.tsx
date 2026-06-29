import { mdiDeleteSweepOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteSweepOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteSweepOutline} {...props} />;
}

export { mdiDeleteSweepOutline as path };
