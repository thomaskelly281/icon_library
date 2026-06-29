import { mdiCrosshairsQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrosshairsQuestion(props: IconComponentProps) {
  return <Icon path={mdiCrosshairsQuestion} {...props} />;
}

export { mdiCrosshairsQuestion as path };
