import { mdiHelicopter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Helicopter(props: IconComponentProps) {
  return <Icon path={mdiHelicopter} {...props} />;
}

export { mdiHelicopter as path };
