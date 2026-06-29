import { mdiPlayProtectedContent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayProtectedContent(props: IconComponentProps) {
  return <Icon path={mdiPlayProtectedContent} {...props} />;
}

export { mdiPlayProtectedContent as path };
