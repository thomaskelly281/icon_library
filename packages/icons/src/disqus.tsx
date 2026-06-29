import { mdiDisqus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Disqus(props: IconComponentProps) {
  return <Icon path={mdiDisqus} {...props} />;
}

export { mdiDisqus as path };
