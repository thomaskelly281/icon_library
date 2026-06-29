import { mdiFolderHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderHeart(props: IconComponentProps) {
  return <Icon path={mdiFolderHeart} {...props} />;
}

export { mdiFolderHeart as path };
