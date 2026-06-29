import { mdiSourceMerge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceMerge(props: IconComponentProps) {
  return <Icon path={mdiSourceMerge} {...props} />;
}

export { mdiSourceMerge as path };
