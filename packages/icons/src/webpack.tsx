import { mdiWebpack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Webpack(props: IconComponentProps) {
  return <Icon path={mdiWebpack} {...props} />;
}

export { mdiWebpack as path };
