import { mdiQuadcopter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Quadcopter(props: IconComponentProps) {
  return <Icon path={mdiQuadcopter} {...props} />;
}

export { mdiQuadcopter as path };
