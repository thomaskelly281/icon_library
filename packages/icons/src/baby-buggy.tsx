import { mdiBabyBuggy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BabyBuggy(props: IconComponentProps) {
  return <Icon path={mdiBabyBuggy} {...props} />;
}

export { mdiBabyBuggy as path };
