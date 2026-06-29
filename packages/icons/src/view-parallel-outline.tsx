import { mdiViewParallelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewParallelOutline(props: IconComponentProps) {
  return <Icon path={mdiViewParallelOutline} {...props} />;
}

export { mdiViewParallelOutline as path };
