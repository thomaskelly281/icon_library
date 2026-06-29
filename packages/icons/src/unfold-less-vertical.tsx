import { mdiUnfoldLessVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UnfoldLessVertical(props: IconComponentProps) {
  return <Icon path={mdiUnfoldLessVertical} {...props} />;
}

export { mdiUnfoldLessVertical as path };
