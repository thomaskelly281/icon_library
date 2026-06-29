import { mdiRazorSingleEdge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RazorSingleEdge(props: IconComponentProps) {
  return <Icon path={mdiRazorSingleEdge} {...props} />;
}

export { mdiRazorSingleEdge as path };
