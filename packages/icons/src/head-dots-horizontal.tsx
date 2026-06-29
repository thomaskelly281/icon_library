import { mdiHeadDotsHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadDotsHorizontal(props: IconComponentProps) {
  return <Icon path={mdiHeadDotsHorizontal} {...props} />;
}

export { mdiHeadDotsHorizontal as path };
