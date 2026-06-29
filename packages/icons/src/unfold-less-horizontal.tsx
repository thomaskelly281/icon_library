import { mdiUnfoldLessHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UnfoldLessHorizontal(props: IconComponentProps) {
  return <Icon path={mdiUnfoldLessHorizontal} {...props} />;
}

export { mdiUnfoldLessHorizontal as path };
